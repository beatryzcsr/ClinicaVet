import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        //componente footer com as midias sociais e direitos autorais
        <footer className="bg-[#013125] text-white py-8 scroll-smooth">
            <div className="container mx-auto text-center">
                <div className="flex justify-center mb-4 gap-3">
                    <a href="https://www.instagram.com/instagram/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#efd1ab] transition-colors duration-300"> <FaInstagram size={24} /></a>

                    <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/WhatsApp_Logo_green.svg/250px-WhatsApp_Logo_green.svg.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#efd1ab] transition-colors duration-300"> </a>
                        <FaWhatsapp size={24} />
                    
                </div>
                <p>&copy; {new Date().getFullYear()} Patascal. Todos os direitos reservados.</p>


            </div>
        </footer>
    )
}