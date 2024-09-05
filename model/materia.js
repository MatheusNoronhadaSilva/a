// Importa de biblioteca do @prisma/client
const { PrismaClient } = require('@prisma/client')

// Instacia da classe PrismaClient
const prisma = new PrismaClient()

const selectAllMaterias = async function(){
    try {
        let sql = `select * from Materias`;

        // Executa no banco de dados o script sql
        let rsMateria= await prisma.$queryRawUnsafe(sql);

            return rsMateria;
    
        } catch (error) {
            console.log(error);
            return false;
            
        }
        
}

const selectMateriaByIdAluno = async function(id) {

    try {
        let sql = `    SELECT 
    m.materia AS Materia
FROM 
    Alunos a
JOIN 
    Alunos_Materia am ON a.id = am.aluno_id
JOIN 
    Materias m ON am.materia_id = m.id
WHERE 
    a.id = ${id};`;

        // Executa no banco de dados o script sql
        let rsMateria= await prisma.$queryRawUnsafe(sql);

            return rsMateria;
    
        } catch (error) {
            console.log(error);
            return false;
            
        }
}


module.exports ={
    selectAllMaterias,
    selectMateriaByIdAluno
}

