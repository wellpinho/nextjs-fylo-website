import { useEffect, useState } from "react"

export const Header = () => {
    const [hiddenDarkIcon, setHiddenDarkIcon] = useState('')
    const [hiddenLightIcon, setHiddenLightIcon] = useState('')
    const [theme, setTheme] = useState('')

    function handleThemeToDarkMode() {
        localStorage.setItem('color-theme', 'dark')

        if (localStorage.getItem('color-theme') === 'dark') {
            setHiddenDarkIcon('hidden')
            setHiddenLightIcon('')
            setTheme('bg-black')
        }
    }

    function handleThemeToLightMode() {
        localStorage.setItem('color-theme', 'light')

        if (localStorage.getItem('color-theme') === 'light') {
            setHiddenLightIcon('hidden')
            setHiddenDarkIcon('')
            setTheme('bg-white')
        }
    }
    // TODO: preciso enviar os dados do filho par ao pai: context api???
    return (
        <header className={`
            ${theme}
            container 
            mx-auto 
            mt-10 
            px-6 
            text-center 
            h-40 md:h-20
        `}>
            <div className="
                bg-logo-light-mode 
                dark:bg-logo-dark-mode 
                bg-no-repeat 
                h-20 
                w-48 
                mx-auto 
                md:mx-0 
                absolute 
                top-10 left-10
            "></div>

            <div className="
                flex 
                items-center 
                justify-center 
                space-x-4 
                md:space-x-10 
                md:absolute 
                top-12 
                right-10
            ">
                <a href="#features" className="hover:text-accentCyan">Features</a>
                <a href="#features" className="hover:text-accentCyan">Testimonials</a>

                <button 
                    className="
                        text-gray-500
                        dark:text-gray-400hover:bg-gray-100
                        dark:hover:bg-gray-700focus:outline-none
                        focus:ring-4focus:ring-gray-700
                        dark:focus:ring-gray-700
                        rounded-lg
                        text-sm
                        p-25
                        bg-white
                        p-2
                    "
                >
                    <svg
                        onClick={handleThemeToDarkMode}
                        id="theme-toggle-dark-icon"
                        className={`w-5 h-5 ${hiddenDarkIcon}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                        ></path>
                    </svg>
                    <svg
                        onClick={handleThemeToLightMode}
                        id="theme-toggle-light-icon"
                        className={`w-5 h-5 ${hiddenLightIcon}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}