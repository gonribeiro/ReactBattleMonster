import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
// import { useAuth } from '../hooks/useAuth';
// import { database } from '../services/firebase';
import { useStory } from '../hooks/useStory';

import { Paper, Grid, Button } from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';

export default function Landing() {
    // const { user, signInWithGoogle } = useAuth();
    const history = useHistory();
    const { updateStoryValue } = useStory();

    async function gameMode(mode: String) {
        if (mode === 'new-game') { // Parâmetros para novo jogo do modo história
            // if (!user) {
            //     await signInWithGoogle();
            // }

            updateStoryValue({
                opponentMonsterNumber: 0,
                yourMonsterNumber: 0,
                storyNumber: 0,
                remedy: 2,
                maximumPower: 2,
                inGame: true
            })

            history.push('/story-mode');
            return;
        }

        history.push('/'+mode);
    }

    return (
        <div
            style={{
                backgroundImage: "url(img/screens/background-landing.jpg)",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: "97vh",
                width: "100%",
            }}
        >
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{
                    margin: "auto",
                    maxWidth: 990,
                    minHeight: window.innerHeight - 40,
                }}
            >
                <Paper className="paper">
                    {/* <Grid container spacing={2} justify="center">
                        <Button
                            size="large"
                            color="primary"
                            onClick={() => gameMode('story-mode')}
                            disabled={
                                // Havendo cookie, há opção de continuar história
                                String(Cookies.get('storyNumber')) !== 'undefined' ? false : true
                            }
                        >
                            Continuar História
                        </Button>
                    </Grid> */}
                    <Grid container spacing={2} justify="center">
                        <Button
                            size="large"
                            color="primary"
                            onClick={() => gameMode('new-game')}
                        >
                            Modo História
                            {/* {!user ? '(Login)' : ''} */}
                        </Button>
                    </Grid>
                    {/* <Grid container spacing={2} justify="center">
                        <Button
                            size="large"
                            color="primary"
                            disabled={true}
                        >
                            Pontuação
                        </Button>
                    </Grid>
                    <Grid container spacing={2} justify="center">
                        <Button
                            size="large"
                            color="primary"
                            disabled={true}
                        >
                            Batalhar On-Line
                            {!user ? '(Login)' : ''}
                        </Button>
                    </Grid> */}
                    <Grid container spacing={2} justify="center">
                        <Button
                            size="large"
                            color="primary"
                            onClick={() => gameMode('treining')}
                        >
                            Treinar
                        </Button>
                    </Grid>
                    <Grid container spacing={2} justify="center">
                        <Link to="/howto">
                            <Button
                                size="large"
                                color="primary"
                            >
                                Mecânicas do Jogo
                            </Button>
                        </Link>
                    </Grid>
                    <Grid container spacing={2} justify="center">
                        <Button
                            size="large"
                            color="primary"
                            href="https://github.com/gonribeiro/React-Battle-Rpg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon /> &nbsp; Github
                        </Button>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}
