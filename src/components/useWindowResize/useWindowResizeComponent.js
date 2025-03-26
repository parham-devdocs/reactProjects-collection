
import useResize from "./index";

export default function UserWindowResizeComponent() {
const {width,height}=useResize()

    return (
        <div className=" flex flex-col gap-5" >
            <p>Width :{width}</p>
            <p> Height :{height}</p>
        </div>
    )
}