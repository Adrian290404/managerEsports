import { Input, Label, Player } from "../styles/teamFormStyles"

interface StaffProps {
    staff: string;
    current: boolean;
    form: { [key: string]: string };
    setForm: (form: { [key: string]: string }) => void;
}

export const StaffForm: React.FC<StaffProps> = ({ staff, current, form, setForm }) => {
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <Player current={current}>
            <Label htmlFor={"name" + staff}>Nombre</Label>
            <Input id={"name" + staff} name={`name${staff}`} value={form[`name${staff}`]} onChange={change} />
            
            <Label htmlFor={"age" + staff}>Edad</Label>
            <Input id={"age" + staff} name={`age${staff}`} type="number" value={form[`age${staff}`]} onChange={change} />
            
            <Label htmlFor={"email" + staff}>Correo</Label>
            <Input id={"email" + staff} name={`email${staff}`} value={form[`email${staff}`]} onChange={change} />
            
            <Label htmlFor={"telephone" + staff}>Telefono</Label>
            <Input id={"telephone" + staff} name={`telephone${staff}`} value={form[`telephone${staff}`]} onChange={change} />
            
            <Label htmlFor={"discordID" + staff}>Discord ID</Label>
            <Input id={"discordID" + staff} name={`discordID${staff}`} value={form[`discordID${staff}`]} onChange={change} />
        </Player>
    );
};