import { createBoard } from '@wixc3/react-board';
import { Menu } from '../../../menu/menu';

export default createBoard({
    name: 'Menu',
    Board: () => <Menu />
});
