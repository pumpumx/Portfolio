import {AnimationAction} from 'three'

export interface navType {
    id: number;
    name: string;
    href: string;
    gradient: string;
  }
  let animateAction:AnimationAction | null = null;

  export const navData: navType[] = [
    { id: 1, name: "Home", href: "/home", gradient: "hover:shadow-[0_0_80px_1px_#fa00ff]" },
    { id: 2, name: "About", href: "/about", gradient: "hover:shadow-[0_0_80px_1px_yellow]" },
    { id: 3, name: "Work", href: "/work", gradient: "hover:shadow-[0_0_80px_1px_red]" },
    { id: 4, name: "Blog", href: "/blog", gradient: "hover:shadow-[0_0_80px_1px_#28ed1a]" },
    { id: 5, name: "More", href: "/more", gradient: "hover:shadow-[0_0_80px_1px_violet]" },
    { id: 6, name: "Book a Call", href: "/book", gradient: "hover:shadow-[0_0_80px_1px_#00f6ff]" }
  ];

  export const FooterData: navType[] = [
    { id: 1, name: "Home", href: "/home", gradient: "hover:shadow-[0_0_80px_2px_#fa00ff]" },
    { id: 2, name: "About", href: "/about", gradient: "hover:shadow-[0_0_80px_2px_yellow]" },
    { id: 3, name: "Work", href: "/work", gradient: "hover:shadow-[0_0_80px_2px_red]" },
    { id: 4, name: "Blog", href: "/blog", gradient: "hover:shadow-[0_0_80px_2px_#28ed1a]" },
    { id: 5, name: "More", href: "/more", gradient: "hover:shadow-[0_0_80px_2px_violet]" },
  ];

  export const FooterExtraData: navType[] = [
    { id: 1, name: "Book a call", href: "/book", gradient: "hover:shadow-[0_0_80px_5px_#fa00ff]" },
    { id: 2, name: "BucketList", href: "/bucketList", gradient: "hover:shadow-[0_0_80px_5px_yellow]" },
    { id: 3, name: "Links", href: "/links", gradient: "hover:shadow-[0_0_80px_5px_#28ed1a]" },

    
  ];

  export const getAction = (action: {[x: string]: AnimationAction | null})=>{
    animateAction = action['Take 001'] || null
    console.log("animate" , animateAction);
    animateAction?.play().setDuration(100)
  }
  
  export default animateAction; 