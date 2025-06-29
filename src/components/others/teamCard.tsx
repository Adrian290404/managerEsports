import { CardImage } from "../../styles/teamSelectStyles";


interface teamCard {
    image: string;
    id: number;
    onClick?: () => void;
}

export const TeamCard: React.FC<teamCard> = ({image, id, onClick}) => {

    return <>
        <CardImage src={image} alt={id.toString()} onClick={onClick} />
    </>
}