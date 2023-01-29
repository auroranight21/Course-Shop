import {Caption} from "@/src/components/Caption/Caption";
import {Button} from "@/src/components/Button/Button";
import {Paragraph} from "@/src/components/Paragraph/Paragraph";
import {Tag} from "@/src/components/Tag/Tag";
import {Rating} from "@/src/components/Rating/Rating";
import {useState} from "react";
import {withLayout} from "@/layout/Layout";


function home(): JSX.Element {

    const [rating, setRating] = useState(2)
    return (
        <>
            <Caption tag='h1' >ALEX</Caption>
            <Button appearance={'primary'} className={'alex'} arrow={'right'}>Button</Button>
            <Button appearance={'ghost'} arrow={'down'}>Button</Button>
            <Paragraph size={'l'}>Alex</Paragraph>
            <Paragraph>Alex</Paragraph>
            <Paragraph size={'s'}>Alex</Paragraph>
            <Tag size='m'>Alex</Tag>
            <Tag size='m' color='red'>Alex</Tag>
            <Tag size='s' color='green'>Alex</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
        </>
    )
}
export default withLayout(home);