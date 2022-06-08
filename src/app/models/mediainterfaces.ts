export interface NavigatorInterface {
    logo: ImageInterface;
    links: LinksInterface[];

}

export interface LinksInterface {
    text:string;
    link:string;
}

export interface ImageInterface {
    src:string;
    alt:string;
    class:string;
}

export interface HeroInterface {
    title:string,
    media: ImageInterface[]
}

export interface MediaInterface{
    title:string;
    media: ImageInterface[]
}