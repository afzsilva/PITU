import React from 'react';
import Header from '../../components/Header';
import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap';
import { ContentContainer, Form } from './styles';
import ShortenerService from '../../services/shortenerService';
import vars from '../../configs/vars';

class HomePage extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

        this.state = {

            isLoading: false,
            url: '',
            code: '',
            errorMessage: '',
        }
    }//construtor

    handleSubmit = async (event) => {
        event.preventDefault();
        const { url } = this.state;
        this.setState({ isLoading: true, errorMessage: '' });

        if (!url) {
            this.setState({ isLoading: false, errorMessage: 'Informe uma url para encurtar' });
        } else {
            try {
                const service = new ShortenerService();
                const result = await service.generate({ url });

                this.setState({ isLoading: false, code: result.code });

            } catch (error) {
                this.setState({ isLoading: false, errorMessage: 'Ops, ocorreu m erro ao tentar encurtar a url.' });

            }
        }
    }

    copyToClipboard = async () => {
        const element = this.inputURL;
        element.select();
        document.execCommand('copy');
    }

    render() {
        const { isLoading, errorMessage, code } = this.state;
        return (
            <Container>
                <Header>Seu novo encuratador de URL</Header>
                <ContentContainer>
                    <Form onSubmit={this.handleSubmit}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Digite uma URL para encurtar"
                                defaultValue=""
                                onChange={e => this.setState({ url: e.target.value })}
                            />
                            <InputGroup.Append>
                                <Button variant="primary" type="submit">Encurtar</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        {isLoading ? (
                            <Spinner animation="border" />
                        ) : (
                                code && (
                                    <>
                                        <InputGroup className="mb-3" >
                                            <FormControl
                                                autoFocus={true}
                                                defaultValue={vars.HOST_APP + code}//url do projeto
                                                ref={(input) => this.inputURL = input}
                                            />
                                            <InputGroup.Append>
                                                <Button variant="outline-secondary" onClick={() => this.copyToClipboard()}>Copiar</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <p>Para acompanhar as estatísticas, acesse {vars.HOST_APP + code}</p>
                                    </>
                                )
                            )}
                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    </Form>
                </ContentContainer>
            </Container>
        )//return
    }//render
}//class

export default HomePage;