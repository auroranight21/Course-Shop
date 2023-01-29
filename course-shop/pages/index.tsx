import {Caption} from "@/src/components/Caption/Caption";
import {Button} from "@/src/components/Button/Button";
import {Paragraph} from "@/src/components/Paragraph/Paragraph";
import {Tag} from "@/src/components/Tag/Tag";
import {Rating} from "@/src/components/Rating/Rating";
import {useState} from "react";
import {withLayout} from "@/layout/Layout";
import axios from "axios";
import {GetStaticProps} from "next";
import {MenuItem} from "@/interfaces/menu.interfaces";
import {API} from "@/helpers/api";


function Home({menu, firstCategory}: HomeProps): JSX.Element {

    const [rating, setRating] = useState(0)
    return (
        <>
            <Caption tag='h1'>ALEX</Caption>
            <Button appearance={'primary'} className={'alex'} arrow={'right'}>Button</Button>
            <Button appearance={'ghost'} arrow={'down'}>Button</Button>
            <Paragraph size={'l'}>Alex</Paragraph>
            <Paragraph>Alex</Paragraph>
            <Paragraph size={'s'}>Alex</Paragraph>
            <Tag size='m'>Alex</Tag>
            <Tag size='m' color='red'>Alex</Tag>
            <Tag size='s' color='green'>Alex</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
            <ul>
                {menu.map(el => (<li key={el._id.secondCategory}>{el._id.secondCategory}</li>))}
            </ul>
        </>
    )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

export interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[]
    firstCategory: number
}
