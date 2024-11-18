import { FC } from "react";

interface HeaderProps{
    title:string,
    tag:string,
}


const Header:FC<HeaderProps>=({title,tag})=>{
    return(
        <div className="bg-secondary-background flex flex-none flex-nowrap relative p-6 w-full items-center justify-between h-16 border border-border rounded-3xl">
            {/*Title*/}
            <div>
                <p className="text-lg font-medium leading-3 font-PixelFont text-primary-foreground">
                    {title}</p>
            </div>
            {/*Title*/}
             {/*Tag*/}
             <div>
                <p className="text-lg font-medium leading-3 text-primary-foreground">
                    {tag}</p>
            </div>
            {/*Tag*/}
        </div>
    )
    
}

export default Header;