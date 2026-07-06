import Lozenge from "./Lozenge";

interface CardProps {
    index: number;
    icon?: string;
    name: string;
    date?: string;
    company?: string;
    description: string;
    technologies: string[];
    button?: string;
    link?: string;
}

export default function Card({ index, icon, name, date, company, description, technologies, button, link }: CardProps) {

    // const expClasses = "flex flex-col sm:flex-row gap-1 sm:gap-4 sm:items-center";
    // const projClasses = "flex sm:flex-row gap-1 sm:gap-4 sm:items-center";

    const expClasses = "flex flex-col lg:flex-row sm:justify-between";
    const projClasses = "flex flex-wrap sm:flex-row justify-between";

    return (
        <div
            key={index}
            className="flex flex-col bg-blue-950/60 w-3/4 max-w-4xl p-4 border border-blue-200 text-left rounded-md"
        >
            <div className={button ? projClasses : expClasses}>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 sm:items-center">
                    {icon &&
                        <span className="text-4xl">
                            {icon}
                        </span>
                    }

                    <span className="text-blue-200 lg:text-lg font-code">
                        {name}
                    </span>

                    {company &&
                        <span className="text-white text-sm sm:text-base">
                            @ {company}
                        </span>
                    }

                </div>

                {date &&
                    <span className="text-white text-xs sm:text-sm pt-1">
                        {date}
                    </span>
                }

                {button &&
                    <div className="pt-2 pb-2 sm:pt-0 sm:pb-0">
                        <button
                            onClick={() => window.location.href = link ?? ''}
                            className="relative z-50 text-white text-sm px-3 py-1 rounded-md border border-white hover:bg-blue-900 transition cursor-pointer w-28"
                        >
                            {button}
                        </button>
                    </div>
                }
            </div>

            <span className="text-white text-xs sm:text-sm pt-1 sm:pt-4 leading-5 sm:leading-6">
                {description}
            </span>

            <div className="flex gap-2 pt-2 sm:pt-4 justify-start flex-wrap">
                {technologies.map((idx) =>
                    <Lozenge text={idx} />
                )}
            </div>
        </div >
    )
}