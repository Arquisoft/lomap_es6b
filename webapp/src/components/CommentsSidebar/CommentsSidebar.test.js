import { render, screen, fireEvent } from '@testing-library/react';
import CommentsSidebar from './CommentsSidebar';

describe('CommentsSidebar', () => {
  const session = {};
  const userWebId = 'https://example.com/user#me';
  const place = {
    id: 'https://example.com/places/1',
    textComments: [
      {
        posterWebId: 'https://example.com/user#1',
        text: 'This place is great!'
      }
    ],
    imageComments: [
      {
        posterWebId: 'https://example.com/user#2',
        text: 'Beautiful view!'
      }
    ],
    ratingComments: [
      {
        posterWebId: 'https://example.com/user#3',
        value: 5
      }
    ]
  };

  test('renders the component', () => {
    render(<CommentsSidebar session={session} userWebId={userWebId} place={place} />);
    expect(screen.getByTestId('commentSidebarLabelShowing')).toBeInTheDocument();
  });

  test('shows text comments by default', () => {
    render(<CommentsSidebar session={session} userWebId={userWebId} place={place} />);
    expect(screen.getByText('Text comments')).toBeInTheDocument();
    expect(screen.queryByText('Ratings')).toBeNull();
    expect(screen.queryByText('Images')).toBeNull();
  });


  test('opens text comment dialog when button is clicked', () => {
    render(<CommentsSidebar session={session} userWebId={userWebId} place={place} />);
    const botonAdd = screen.getByTestId('addCommentButton');
    expect(botonAdd).toBeInTheDocument();
    fireEvent.click(botonAdd);
    //titulo que aparece en la ventana de dialogo que hemos abeirto
    expect(screen.getByTestId('tituloDialogo')).toBeInTheDocument();

  });


  test('start to write a comment but close', () => {

    const handleAddTextCommentMock = jest.fn();

    render(<CommentsSidebar session={session} userWebId={userWebId} place={place} handleAddTextCommentMock />);
    const botonAdd = screen.getByTestId('addCommentButton');
    expect(botonAdd).toBeInTheDocument();
    fireEvent.click(botonAdd);
    //titulo que aparece en la ventana de dialogo que hemos abeirto
    expect(screen.getByTestId('tituloDialogo')).toBeInTheDocument();

    //busca el textArea
    const zonaPaEscribir = screen.getByTestId("escribeComentario");

    //escribe en el area un comentario
   const escribeAqui = zonaPaEscribir.querySelector("textarea");
    fireEvent.change(escribeAqui, { target: { value: "hola mundo" } });//innerText
    expect(escribeAqui.value).toBe("hola mundo");


    //busca el boton para cancela
    const cancelaMensaje = screen.getByTestId('cancelaMensaje');
    expect(cancelaMensaje).toBeInTheDocument();

    //clico en el boton cancelar
    fireEvent.click(cancelaMensaje);
    expect(handleAddTextCommentMock).not.toHaveBeenCalled();

  });



  test('start to write a comment but close', () => {

    jest.fn();

    render(<CommentsSidebar session={session} userWebId={userWebId} place={place} handleAddTextCommentMock />);
    const botonAdd = screen.getByTestId('addCommentButton');
    expect(botonAdd).toBeInTheDocument();
    fireEvent.click(botonAdd);
    //titulo que aparece en la ventana de dialogo que hemos abeirto
    expect(screen.getByTestId('tituloDialogo')).toBeInTheDocument();

    //busca el textArea
    const zonaPaEscribir = screen.getByTestId("escribeComentario");

    //escribe en el área un comentario
   const escribeAqui = zonaPaEscribir.querySelector("textarea");
    fireEvent.change(escribeAqui, { target: { value: "hola mundo" } });//innerText
    expect(escribeAqui.value).toBe("hola mundo");


    //busca el boton para addMensaje
    const addMensaje = screen.getByTestId('addMensaje');
    expect(addMensaje).toBeInTheDocument();


  });
  


  test('shows rating comments when button is clicked', () => {
    render(<CommentsSidebar session={session} userWebId={userWebId} place={place} />);
    const botonShowing = screen.getByTestId('botonShowing');
    expect(botonShowing).toBeInTheDocument();
    fireEvent.click(botonShowing);
    

    const element = document.getElementById('showing-comments');
fireEvent.click(element);
expect(screen.getByText('Text comments')).toBeInTheDocument();


  });
});
