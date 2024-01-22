import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, IconButton, useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react"

export const DrawerNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = useRef()

    return (
        <>
            <IconButton
                bg='black'
                ref={firstField}
                onClick={onOpen}
                opacity='0.7'
                _hover={{
                    opacity: '1',
                    background: '#9B79FC'
                }}
                _active={{
                    opacity: '1',
                    background: '#9B79FC'
                }}
                icon={<HamburgerIcon color='white' boxSize='2rem' />} aria-label={""} />
            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}