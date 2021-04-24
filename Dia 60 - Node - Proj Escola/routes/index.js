var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Controllers
var aluno_controller = require('../controllers/alunoController');
var curso_controller = require('../controllers/cursoController');
var matricula_controller = require('../controllers/matriculaController');
var turma_controller = require('../controllers/turmaController');


/// Aluno Routes ///
// GET inicio alunos.
router.get('/', aluno_controller.index);
// GET para criar um aluno
router.get('/aluno/create', aluno_controller.cadastrar_aluno);
// GET para listar os alunos
router.get('/alunos', aluno_controller.listar_alunos);

/// Curso Routes ///
// GET inicio cursos.
router.get('/', curso_controller.index);
// GET para criar um curso
router.get('/curso/create', curso_controller.cadastrar_curso);
// GET para listar os cursos
router.get('/cursos', curso_controller.listar_cursos);

/// Matricula Routes ///
// GET inicio matriculas.
router.get('/', matricula_controller.index);
// GET para criar uma matricula
router.get('/matricula/create', matricula_controller.cadastrar_matricula);
// GET para listar as matriculas
router.get('/matriculas', matricula_controller.listar_matriculas);

/// Turma Routes ///
// GET inicio turmas.
router.get('/', turma_controller.index);
// GET para criar uma turma
router.get('/turma/create', turma_controller.cadastrar_turma);
// GET para listar as turmas
router.get('/turmas', turma_controller.listar_turmas);





module.exports = router;
