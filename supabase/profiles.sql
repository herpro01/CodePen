create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name varchar(50) not null default 'Pengguna KodePen'
    check (char_length(display_name) between 1 and 50),
  bio varchar(240) not null default ''
    check (char_length(bio) <= 240),
  profile_completed boolean not null default false,
  updated_at timestamptz not null default now()
);

alter table public.profiles
  alter column display_name type varchar(50) using display_name::varchar(50),
  alter column bio type varchar(240) using bio::varchar(240);

alter table public.profiles enable row level security;

drop policy if exists "Users can read their own profile" on public.profiles;
create policy "Users can read their own profile"
  on public.profiles for select
  to authenticated
  using ((select auth.uid()) = id);

drop policy if exists "Users can create their own profile" on public.profiles;
create policy "Users can create their own profile"
  on public.profiles for insert
  to authenticated
  with check ((select auth.uid()) = id);

drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile"
  on public.profiles for update
  to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

create or replace function public.create_kodepen_profile()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  provider_name text;
begin
  provider_name := coalesce(
    nullif(new.raw_user_meta_data ->> 'full_name', ''),
    nullif(new.raw_user_meta_data ->> 'name', ''),
    nullif(new.raw_user_meta_data ->> 'user_name', ''),
    nullif(split_part(coalesce(new.email, ''), '@', 1), ''),
    'Pengguna KodePen'
  );

  insert into public.profiles (id, display_name)
  values (new.id, left(provider_name, 50))
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created_kodepen on auth.users;
create trigger on_auth_user_created_kodepen
  after insert on auth.users
  for each row execute function public.create_kodepen_profile();

grant select, insert, update on public.profiles to authenticated;

create table if not exists public.projects (
  user_id uuid not null references auth.users (id) on delete cascade,
  id varchar(100) not null,
  title varchar(60) not null check (char_length(title) between 1 and 60),
  html text not null default '',
  css text not null default '',
  js text not null default '',
  updated_at timestamptz not null default now(),
  primary key (user_id, id)
);

alter table public.projects enable row level security;

drop policy if exists "Users can read their own projects" on public.projects;
create policy "Users can read their own projects"
  on public.projects for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can create their own projects" on public.projects;
create policy "Users can create their own projects"
  on public.projects for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own projects" on public.projects;
create policy "Users can update their own projects"
  on public.projects for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can delete their own projects" on public.projects;
create policy "Users can delete their own projects"
  on public.projects for delete
  to authenticated
  using ((select auth.uid()) = user_id);

grant select, insert, update, delete on public.projects to authenticated;
