/*
# Create contact_messages table

1. New Tables
- `contact_messages`
- `id` (uuid, primary key, auto-generated)
- `name` (text, not null) - name of the person contacting
- `email` (text, not null) - email address of the sender
- `subject` (text, not null) - subject of the message
- `message` (text, not null) - the actual message content
- `created_at` (timestamptz, default now()) - timestamp of submission

2. Security
- Enable RLS on `contact_messages`.
- Allow anonymous and authenticated users to insert (submit) messages.
- Allow anonymous and authenticated users to read their own messages (for demo purposes, we allow all reads).
- This is a single-tenant portfolio app where anyone can submit a contact form.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_contact_messages" ON contact_messages;
CREATE POLICY "anon_select_contact_messages"
  ON contact_messages FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_contact_messages" ON contact_messages;
CREATE POLICY "anon_update_contact_messages"
  ON contact_messages FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_contact_messages" ON contact_messages;
CREATE POLICY "anon_delete_contact_messages"
  ON contact_messages FOR DELETE
  TO anon, authenticated USING (true);
