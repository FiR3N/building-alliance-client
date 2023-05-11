import { FC } from "react";
import cls from "./InfoBlock.module.scss";
import classNames from "classnames";

interface InfoBlockProps {
  children: React.ReactNode;
  blockType: BlockInfoType;
}

enum BlockInfoType {
  error = -1,
  warning = 0,
  success = 1,
}

const InfoBlock: FC<InfoBlockProps> = ({ children, blockType }) => {
  return (
    <div
      className={classNames(
        cls.infoBlock,
        (blockType == 1 && cls.infoBlockSuccess) ||
          (blockType == 0 && cls.infoBlockWarning) ||
          (blockType == -1 && cls.infoBlockError)
      )}
    >
      {children}
    </div>
  );
};

export default InfoBlock;
