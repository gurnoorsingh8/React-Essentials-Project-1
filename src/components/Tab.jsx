export default function Tab({children, button, buttonsContainer="menu"}) {
    const ButtonsContainer = buttonsContainer
    return (
        <>
            <ButtonsContainer>
                {button}
            </ButtonsContainer>
            {children}
        </>
    );
}