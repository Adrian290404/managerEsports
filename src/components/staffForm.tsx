import { Input, Label, Player } from "../styles/teamFormStyles";

export interface StaffData {
    staffName: string;
    staffAge: string;
    staffEmail: string;
    staffTelephone: string;
    staffDiscordID: string;
}

interface StaffFormProps {
    form: StaffData;
    setForm: (newForm: StaffData) => void;
}

export const StaffForm: React.FC<StaffFormProps> = ({ form, setForm }) => {
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <Player>
            <Label htmlFor="staffName">Nombre</Label>
            <Input id="staffName" name="staffName" value={form.staffName} onChange={change} />

            <Label htmlFor="staffAge">Edad</Label>
            <Input id="staffAge" name="staffAge" type="number" value={form.staffAge} onChange={change} />

            <Label htmlFor="staffEmail">Correo</Label>
            <Input id="staffEmail" name="staffEmail" type="email" value={form.staffEmail} onChange={change} />

            <Label htmlFor="staffTelephone">Teléfono</Label>
            <Input id="staffTelephone" name="staffTelephone" value={form.staffTelephone} onChange={change} />

            <Label htmlFor="staffDiscordID">Discord ID</Label>
            <Input id="staffDiscordID" name="staffDiscordID" value={form.staffDiscordID} onChange={change} />
        </Player>
    );
};