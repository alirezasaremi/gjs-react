import H1 from "./Headings/H1";
import OrderedList from "./Lists/OrderedList";
import UnorderedList from "./Lists/UnorderedList";

const LocalPlugins = () => {
    return [OrderedList, UnorderedList, H1]
}

export default LocalPlugins;