import React from 'react';
import { IconBrandGithub, IconRocket } from '@tabler/icons-react';

function Footer() {
    return (
        <>
            <footer className="footer bg-black tetx-white items-center p-4 border-t border-white">
                <aside className="grid-flow-col items-center">
                    <IconRocket size={50}/>
                    <p>Made with ❤️ by Tanishq Chauhan</p>
                </aside>
                
            </footer>
        </>
    )
}

export default Footer