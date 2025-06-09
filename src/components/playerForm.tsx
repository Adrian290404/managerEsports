import { Input, Label, Player } from "../styles/teamFormStyles";

interface PlayerData {
    name: string;
    nickname: string;
    epicname: string;
    epicID: string;
    steamID: string;
    discordID: string;
    peak: string;
}

interface PlayerFormProps {
    form: PlayerData;
    setForm: (newForm: PlayerData) => void;
}

export const PlayerForm: React.FC<PlayerFormProps> = ({ form, setForm }) => {
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Player>
      <Label htmlFor="name">Nombre</Label>
      <Input id="name" name="name" value={form.name} onChange={change} />

      <Label htmlFor="nickname">Nickname</Label>
      <Input id="nickname" name="nickname" value={form.nickname} onChange={change} />

      <Label htmlFor="epicname">Nombre Epic</Label>
      <Input id="epicname" name="epicname" value={form.epicname} onChange={change} />

      <Label htmlFor="epicID">Epic ID</Label>
      <Input id="epicID" name="epicID" value={form.epicID} onChange={change} />

      <Label htmlFor="steamID">Steam ID</Label>
      <Input id="steamID" name="steamID" value={form.steamID} onChange={change} />

      <Label htmlFor="discordID">Discord ID</Label>
      <Input id="discordID" name="discordID" value={form.discordID} onChange={change} />

      <Label htmlFor="peak">Peak</Label>
      <Input id="peak" name="peak" type="number" value={form.peak} onChange={change} />
    </Player>
  );
};
