import { CardImage } from "../../styles/teamSelectStyles";


interface teamCard {
    image: string;
    id: number;
}

export const TeamCard: React.FC<teamCard> = ({image, id}) => {

    return <>
        <CardImage src={image} alt={id.toString()} />
    </>
}