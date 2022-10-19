import { createBoard } from '@wixc3/react-board';
import { MenuItem } from '../../../menu-item/menu-item';

export default createBoard({
    name: 'MenuItem',
    Board: () => <MenuItem menuLabel="sdfsf" />
});
