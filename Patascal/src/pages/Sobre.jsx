import fundoAgua from "/public/fundoAgua.png"
import beijaFlor from "/public/beijaFlor.png"
import GreenLizard from "/public/GreenLizard.png"
import pythonVerde from "/public/pythonVerde.png"
import logoMedVet from "/public/logoMedVet.png"

export default function Sobre() {
    return (
        <div
            id="sobre"
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${fundoAgua})` }}
        >
                    <div className="absolute inset-0 bg-black/40 " />
            <div className="min-h-screen w-full bg-white/5 backdrop-blur-[1px]">
                <div className="relative mx-auto flex w-full max-w-[1500px] flex-col items-center justify-center px-4 pb-3 pt-8">
                    <div className="mb-6 mt-23 flex items-center justify-center">
                        <img
                            src={logoMedVet}
                            alt="Logo"
                            className="h-28 w-28 rounded-full border-[6px] border-[#d4af37] bg-[#f9f9f9] object-cover shadow-[0_0_0_3px_rgba(20,83,45,0.18)]"
                        />
                    </div>

                    <div className="flex w-full items-center justify-center gap-8 lg:gap-14">
                        <div className="flex flex-col gap-6">
                            <div className="overflow-hidden rounded-[10px] border border-[#d4d4d4] bg-white p-1 shadow-[0_6px_16px_rgba(0,0,0,0.12)] rotate-[-4deg]">
                                <img src={beijaFlor} alt="Beija-flor" className="h-44 w-44 object-cover sm:h-52 sm:w-52" />
                            </div>

                            <div className="overflow-hidden rounded-[10px] border border-[#d4d4d4] bg-white p-1 shadow-[0_6px_16px_rgba(0,0,0,0.12)] rotate-[2deg]">
                                <img src={GreenLizard} alt="Lagarto" className="h-44 w-44 object-cover sm:h-52 sm:w-52" />
                            </div>
                        </div>

                        <div className="flex h-[340px] w-[550px] items-center justify-center rounded-[26px] border-[3px] border-[#d9d9d9] bg-[#f5f5f5] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]">
                           
                            <p className="flex text-justify p-10 mt-3 mb-3"> A Patascal é uma clínica veterinária especializada no cuidado de animais exóticos e silvestres, oferecendo atendimento dedicado, seguro e humanizado para cada espécie. Nossa equipe busca proporcionar o melhor cuidado para animais que precisam de atenção especializada, respeitando suas características, necessidades e bem-estar. Na Patascal, cada paciente é tratado com carinho, responsabilidade e conhecimento, porque toda vida merece cuidado.</p>

                        </div>

                        <div className="overflow-hidden rounded-[10px] border border-[#d4d4d4] bg-white p-1 shadow-[0_6px_16px_rgba(0,0,0,0.12)] rotate-[3deg]">
                            <img src={pythonVerde} alt="Python" className="h-44 w-44 object-cover sm:h-52 sm:w-52" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
