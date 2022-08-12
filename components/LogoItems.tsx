import Image from "next/image"

const LogoItems = ({image,title,content}:{image:string,title:string,content:string}) => {
  return (
    <div className="flex flex-col items-start mr-11">
    <Image src={image} height={48} width={48} />
    <p className="text-base">{title}</p>
    <p className="text-start text-xs text-third-color">{content}</p>
</div>
  )
}

export default LogoItems