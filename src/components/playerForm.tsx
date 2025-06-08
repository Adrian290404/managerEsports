import { Input, Label, Player } from "../styles/teamFormStyles"

interface PlayerProps {
  player: number;
  current: boolean;
  form: { [key: string]: string };
  setForm: (form: { [key: string]: string }) => void;
}

export const PlayerForm: React.FC<PlayerProps> = ({ player, current, form, setForm }) => {
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <Player current={current}>
            <Label htmlFor={"nombre" + player}>Nombre</Label>
            <Input id={"nombre" + player} name={`nombre${player}`} value={form[`nombre${player}`]} onChange={change} />
            
            <Label htmlFor={"nickname" + player}>Nickname</Label>
            <Input id={"nickname" + player} name={`nickname${player}`} value={form[`nickname${player}`]} onChange={change} />
            
            <Label htmlFor={"epicname" + player}>Nombre epic</Label>
            <Input id={"epicname" + player} name={`epicname${player}`} value={form[`epicname${player}`]} onChange={change} />
            
            <Label htmlFor={"epicID" + player}>Epic ID</Label>
            <Input id={"epicID" + player} name={`epicID${player}`} value={form[`epicID${player}`]} onChange={change} />
            
            <Label htmlFor={"steamID" + player}>Steam ID</Label>
            <Input id={"steamID" + player} name={`steamID${player}`} value={form[`steamID${player}`]} onChange={change} />
            
            <Label htmlFor={"discordID" + player}>Discord ID</Label>
            <Input id={"discordID" + player} name={`discordID${player}`} value={form[`discordID${player}`]} onChange={change} />
            
            <Label htmlFor={"peak" + player}>Peak</Label>
            <Input id={"peak" + player} name={`peak${player}`} type="number" value={form[`peak${player}`]} onChange={change} />
        </Player>
    );
};