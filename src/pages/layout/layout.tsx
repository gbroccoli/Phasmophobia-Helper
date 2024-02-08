import { FC, ReactNode } from "react"

type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {


    return (
        <>
            <header className="flex-[0_0_auto] py-6 border-b-[1px] border-b-[#FBFFF6]">
                <div className="container mx-auto">
                    Phasmophobia Helper
                </div>
            </header>
            <main className="container mx-auto flex-[1_0_auto]">
                {children}
            </main>
            {/* <footer className="container mx-auto flex-[0_0_auto] py-4">
                dasdsadasdasda
            </footer> */}
        </>
    )
}

export default Layout;