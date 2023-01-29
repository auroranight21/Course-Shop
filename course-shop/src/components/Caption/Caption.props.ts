import {ReactNode} from "react";

export interface CaptionProps {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;

}