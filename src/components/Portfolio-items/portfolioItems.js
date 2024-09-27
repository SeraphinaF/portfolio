import './portfolio-items.css'

function Portfolio() {
    return (
        <section className='container-portfolio'>
            <div className="blocks">
                <div className="block-item">
                    <h3 className="title-portfolio">
                        Kruidvat
                    </h3>
                    <p className="description">Dit is een hele korte beschrijving over mijn gemaakte website.</p>
                </div>
                <div className="block-item">
                    <h3 className="title-portfolio">
                        Anderson
                    </h3>
                    <p className="description">Heel veel staat hier niet.</p>
                </div>
                <div className="block-item">
                    <h3 className="title-portfolio">
                        Brillenwinkel
                    </h3>
                    <p className="description">Het is een kleine zin die het project samenvat en een idee geeft over wat ik heb gemaakt. Hopelijk is dat</p>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
