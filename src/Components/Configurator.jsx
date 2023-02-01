import { useCustomization } from "../Context/Customization";

const Configurator = () => {
    const { material, setMaterial, legs, setLegs, chairColors, chairColor, setChairColor, cushionColors, cushionColor, setCushionColor } = useCustomization();

    return (
        <section className="configurator">
            <section className="configurator__section">
                <section className="configurator__section_title">Chair material</section>
                <section className="configurator__section_values">
                    <section className={`item ${material === "leather" ? "item--active" : ""}`} onClick={() => setMaterial('leather')}>
                        <section className="item_lable">Leather</section>
                    </section>
                    <section className={`item ${material === "fabric" ? "item--active" : ""}`} onClick={() => setMaterial('fabric')}>
                        <section className="item_lable">Fabric</section>
                    </section>

                </section>

            </section>

            <section className="configurator__section">
                <section className="configurator__section__title">Chair color</section>
                <section className="configurator__section__values">
                    {chairColors.map((item, index) => (
                        <section
                            key={index}
                            className={`item ${item.color === chairColor.color ? "item--active" : ""
                                }`}
                            onClick={() => setChairColor(item)}
                        >
                            <section
                                className="item__dot"
                                style={{ backgroundColor: item.color, }}
                            />
                            <section className="item__label">{item.name}</section>
                        </section>
                    ))}
                </section>
            </section>

            <section className="configurator__section">
                <section className="configurator__section__title">Cushion color</section>
                <section className="configurator__section__values">
                    {cushionColors.map((item, index) => (
                        <section
                            key={index}
                            className={`item ${item.color === cushionColor.color ? "item--active" : ""
                                }`}
                            onClick={() => setCushionColor(item)}
                        >
                            <section
                                className="item__dot"
                                style={{ backgroundColor: item.color }}
                            />
                            <section className="item__label">{item.name}</section>
                        </section>
                    ))}
                </section>
            </section>

            <section className="configurator__section">
                <section className="configurator__section__title">Legs</section>
                <section className="configurator__section__values">
                    <section
                        className={`item ${legs === 1 ? "item--active" : ""}`}
                        onClick={() => setLegs(1)}
                    >
                        <section className="item__label">Design</section>
                    </section>
                    <section
                        className={`item ${legs === 2 ? "item--active" : ""}`}
                        onClick={() => setLegs(2)}
                    >
                        <section className="item__label">Classic</section>
                    </section>
                </section>
            </section>

        </section>
    );
};
export default Configurator;