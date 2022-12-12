import { Badge } from "@chakra-ui/react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  user?: any;
  handleFunction?: any;
}

const UserBadgeItem = ({ user, handleFunction }: Props) => {
  return (
    <Badge
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      colorScheme="purple"
      cursor="pointer"
      onClick={handleFunction}
    >
      <div className="flex items-center">
        {user.name}
        <AiOutlineClose className="pl-1 h-3 w-3" />
      </div>
    </Badge>
  );
};

export default UserBadgeItem;
