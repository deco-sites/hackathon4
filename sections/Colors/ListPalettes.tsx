import type { SectionProps } from "$live/mod.ts";

// Props type that will be configured in deco.cx's Admin
export interface Props {
}

export async function loader(
  props: Props,
  _req: Request,
) {
  const res = (await fetch(
    `http://cores.eu-4.evennode.com/`,
  ).then((r) => r.json()));
  
  return { res };
}

export default function DogFacts(
  { res }: SectionProps<typeof loader>,
) {
  return (
    <div class="p-4">
      <h1 class="font-bold text-2xl">Paletas:</h1>
      <ul className="flex list-none flex-wrap justify-center gap-4">
        {
            Object.keys(res).map((id:any, key:number)=>(
                <li key={key} className="flex h-32 relative overflow-hidden rounded-xl shadow-lg shadow-stone-700/50">
                    {res[id].map((c:any)=>(
                        <div className={`flex flex-1 h-full md:p-4 md:hover:p-6 md:items-end items-center text-center direction`} style={{color:c.contrast,background: "#"+c.value}}>
                            <span className="rotate-90 md:rotate-0">#{c.value}</span>
                        </div>
                    ))}
                </li>
            ))
        }
      </ul>
    </div>
  );
}
