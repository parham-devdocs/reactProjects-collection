import useLocalStorage from "./useLocalStorage"

export default function LightDarkMode () {
    const [theme,setTheme]=useLocalStorage("theme","dark")
    function changeThemeHandler() {
        setTheme((prev)=>prev==="dark"?"light":"dark")
    }
    console.log(theme)
    return (
        <div className={` h-screen my-8 w-full ${theme==="dark"?" bg-black":" bg-white"}`}>
            <div>
                <p className={`${theme==="light"?" text-black":" text-white"}`}>Hello world</p>
                <button onClick={changeThemeHandler} className={` py-2 px-1 rounded-md bg-amber-400 `}>Change Theme</button>
            </div>
        </div>
    )
} 