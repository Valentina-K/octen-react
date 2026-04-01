import './L.css'
import {useContext} from "react";
import {ThemeContext} from "../context/themeContext.ts";

export const L = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={theme}>
            <p>
                <span>Adipisci, dolorum hic iste iure quae quaerat reiciendis repellat voluptas? Amet consectetur consequatur hic mollitia officia omnis provident quis, reiciendis! Debitis dolor dolorem fuga modi officiis perferendis similique tempora vitae.</span>
                <span>Adipisci architecto delectus dolor eum facere fugit illum impedit iusto laudantium neque nihil provident quaerat quo quod reiciendis, repellat rerum sint? Ad debitis modi nihil possimus quam reiciendis sapiente similique!</span>
                <span>Accusamus animi autem eaque est fugiat harum labore laudantium minima nemo nulla officiis omnis placeat porro, possimus provident, quae quasi, qui quibusdam quo reiciendis sed suscipit temporibus vel voluptatem voluptates?</span>
                <span>Adipisci amet culpa est ex fugit in ipsa, perferendis quae quam quas quisquam repellat soluta suscipit veritatis voluptatibus. Ad culpa earum eos nam neque officiis perspiciatis quas quasi sed temporibus.</span>
                <span>A aspernatur blanditiis culpa dignissimos distinctio dolorum, esse exercitationem fugiat ipsa ipsum labore laboriosam laborum magnam maxime minima modi nisi nulla numquam officia porro provident quae quis repudiandae soluta veniam.</span>
                <span>Ducimus earum, minima officia perferendis suscipit unde voluptates. Dignissimos distinctio expedita iste maiores minus necessitatibus provident quaerat quidem quo sunt. Animi eaque eum quis recusandae repellendus saepe sequi sint tenetur!</span>
                <span>Distinctio eaque et illum ipsa maxime. Atque consequuntur eveniet natus nostrum odio officia reiciendis? Enim id minus molestiae odio tenetur? Deserunt ex modi nostrum sequi. Hic ipsa ipsam officia recusandae.</span>
                <span>Aperiam, debitis eos iste pariatur porro provident repellat veniam voluptates! Accusamus architecto consequatur, expedita fuga inventore laboriosam quas qui quisquam sequi, sit soluta voluptas voluptate voluptates. Adipisci dignissimos incidunt necessitatibus.</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam et quo reprehenderit? Accusamus, delectus fugit id modi numquam perferendis porro provident quidem ratione reiciendis repellat tempore vel, velit. Aut, eos.</span>
                <span>A ab, delectus dolorem expedita itaque quibusdam quisquam repellat repellendus sed vel? Culpa cupiditate deserunt dolores doloribus eaque eligendi explicabo, molestias nesciunt quam sequi. Aliquid consectetur iste iure nam sequi?</span>
                <span>Adipisci, dolorum hic iste iure quae quaerat reiciendis repellat voluptas? Amet consectetur consequatur hic mollitia officia omnis provident quis, reiciendis! Debitis dolor dolorem fuga modi officiis perferendis similique tempora vitae.</span>
                <span>Adipisci architecto delectus dolor eum facere fugit illum impedit iusto laudantium neque nihil provident quaerat quo quod reiciendis, repellat rerum sint? Ad debitis modi nihil possimus quam reiciendis sapiente similique!</span>
                <span>Accusamus animi autem eaque est fugiat harum labore laudantium minima nemo nulla officiis omnis placeat porro, possimus provident, quae quasi, qui quibusdam quo reiciendis sed suscipit temporibus vel voluptatem voluptates?</span>
                <span>Adipisci amet culpa est ex fugit in ipsa, perferendis quae quam quas quisquam repellat soluta suscipit veritatis voluptatibus. Ad culpa earum eos nam neque officiis perspiciatis quas quasi sed temporibus.</span>
                <span>A aspernatur blanditiis culpa dignissimos distinctio dolorum, esse exercitationem fugiat ipsa ipsum labore laboriosam laborum magnam maxime minima modi nisi nulla numquam officia porro provident quae quis repudiandae soluta veniam.</span>
            </p>
        </div>
    );
};