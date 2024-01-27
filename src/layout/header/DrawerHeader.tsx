import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, IconButton, useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons";

export const DrawerNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <IconButton
                bg='black'
                onClick={onOpen}
                opacity='0.7'
                boxSize='5rem'
                _hover={{
                    opacity: '1',
                    background: '#9B79FC'
                }}
                _active={{
                    opacity: '1',
                    background: '#9B79FC'
                }}
                icon={<HamburgerIcon color='white' boxSize='5rem' />} aria-label={""} />
            <Drawer
                isOpen={isOpen}
                placement='right'
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