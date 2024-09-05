// Importa de biblioteca do @prisma/client
const { PrismaClient } = require('@prisma/client')

// Instacia da classe PrismaClient
const prisma = new PrismaClient()


const selectAlunobyID = async function(id){
    try {
        // Realiza a busca do genero pelo ID
        let sql = `select * from Alunos where id = ${id}`;

        // Executa no banco de dados o script sql
        let rsAluno= await prisma.$queryRawUnsafe(sql);

            return rsAluno;
    
        } catch (error) {
            console.log(error);
            return false;
            
        }
        
}

const selectAllAlunos = async function(){
    try {
        // Realiza a busca do genero pelo ID
        let sql = `select * from Alunos where id > 0`;

        // Executa no banco de dados o script sql
        let rsAluno= await prisma.$queryRawUnsafe(sql);

            return rsAluno;
    
        } catch (error) {
            console.log(error);
            return false;
            
        }
        
}

const insertAluno = async function(dadosAluno) {
    try {
        let sql;

         sql = ` INSERT INTO Alunos (
                            nome,
                            email,
                            senha,
                            telefone,
                            data_nascimento
                        ) 
         VALUES 
           ('${dadosAluno.nome}',
           '${dadosAluno.email}',
           '${dadosAluno.senha}',
           '${dadosAluno.telefone}',
           '${dadosAluno.data_nascimento}'
           )`; 

           console.log(sql);

        let result = await prisma.$executeRawUnsafe(sql);
        
        if (result)
            return true;
        else
            return false;

        } catch (error) {
            console.log(error);
            return false;
        }

}


const lastIDAluno = async function(){
    try {
        let sql = `SELECT id FROM Alunos ORDER BY id DESC LIMIT 1;`

        let sqlID = await prisma.$queryRawUnsafe(sql)

        return sqlID
    } catch (error) {
        return false
    }
    
}

const deleteAluno = async(id) =>{
    try{

        let sql = `delete from Alunos where id = ${id}`
       
    
        //Executa o sql no banco de dados
        let rsdeleteUsuario = await prisma.$executeRawUnsafe(sql)

    
       return rsdeleteUsuario
    
        } catch(error){
            return false
        }
}


module.exports ={
    selectAllAlunos,
    selectAlunobyID,
    lastIDAluno,
    deleteAluno,
    insertAluno

}

