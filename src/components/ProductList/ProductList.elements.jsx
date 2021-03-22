import styled from "styled-components";
import { DEVICE } from "../../constants";
import { Item } from "../ProducItem/ProductItem.elements";

export const List = styled.section`
    margin-left: -${({ gutter }) => gutter / 2 + "px"};
    margin-right: -${({ gutter }) => gutter / 2 + "px"};
    display: flex;
    flex-wrap: wrap;
    ${Item} {
        padding: ${({ gutter }) => gutter / 2 + "px"};
        padding-bottom: ${({ gutter, bt }) =>
            bt ? bt + "px" : gutter / 2 + "px"};
        width: calc(100% / ${({ lg }) => (lg ? lg : 1)});
        @media only screen and (max-width: ${DEVICE.IPADPRO}) {
            width: calc(100% / ${({ lg, md }) => (md ? md : lg)});
        }
        @media only screen and (max-width: ${DEVICE.IPAD}) {
            width: calc(100% / ${({ lg, md, sm }) => (sm ? sm : md || lg)});
        }
        @media only screen and (max-width: ${DEVICE.IPHONE}) {
            width: calc(
                100% / ${({ lg, md, sm, xs }) => (xs ? xs : sm || md || lg)}
            );
        }
    }
`;
