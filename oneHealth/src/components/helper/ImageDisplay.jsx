import { Image } from './Image';
import care from '/care.avif';
import hospital from '/hospital.avif';
import surgery from '/nurse.avif';

export function ImageDisplay() {
    return (
        <>
            <div className="grid grid-cols-2 grid-rows-3 gap-6 lg:gap-10">
                {/* Images */}
                <Image img={care} />
                <Image img={hospital} position="justify-self-end" />
                <Image img={surgery} />
            </div>
        </>
    );
}
