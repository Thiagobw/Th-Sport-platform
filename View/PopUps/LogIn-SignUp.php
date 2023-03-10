<!-- Modal -->
<div class="modal fade" id="LogIn-SignUp" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="LogIn-SignUp" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            
            <div class="modal-header">
                <div></div>
                <h5 class="modal-title" id="LogIn-tittle" style="display: none;">Conecte-se</h5>
                <h5 class="modal-title" id="SignUp-tittle" style="display: none;">Inscreva-se</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div class="modal-body">
                <form class="row form-group center" id="formLogIn" style="display: none;" action="">   
                    <div class="col-12 mb-3">
                        <label for="emailLogIn" class="form-label m-2">Seu email</label>
                        <input type="email" class="form-control" id="emailLogIn" name="emailLogIn" placeholder="Digite seu email...">
                    </div>

                    <div class="col-12 mb-4">
                        <label for="exampleFormControlInput1" class="form-label m-2">Senha</label>
                        <input type="password" class="form-control" id="passLogin" name="passLogin" placeholder="Digite sua senha...">
                    </div>

                    <div class="col-11 col-sm-10 col-md-9 mb-2">
                        <input type="submit" class="btn btn-success form-control" id="submitLogin" name="submitLogin" value="Conectar">
                    </div>
                </form>

                <form class="row form-group center" id="formSignUp" style="display: none;" action="">
                    <div class="col-12 mb-3">
                        <label for="NameSign" class="form-label m-2">Professor ou aluno</label>
                        <select class="form-select" name="" id="">
                            <option selected>Selecione uma op????o</option>
                            <option value="teacher">Professor</option>
                            <option value="Athlete">Atleta</option>
                            <option value="administrator">Administrador</option>
                        </select>
                    </div>

                    <div class="col-12 mb-3">
                        <label for="NameSign" class="form-label m-2">Seu nome</label>
                        <input type="text" class="form-control" id="NameSign" name="NameSign" placeholder="Digite seu nome...">
                    </div>
                    
                    <div class="col-12 mb-3">
                        <label for="CpfSign" class="form-label m-2">Seu CPF</label>
                        <input type="text" class="form-control" id="CpfSign" name="CpfSign" placeholder="Digite seu CPF...">
                    </div>

                    <div class="col-12 mb-3">
                        <label for="emailLogIn" class="form-label m-2">Seu email</label>
                        <input type="email" class="form-control" id="emailSign" name="emailSign" placeholder="Digite seu email...">
                    </div>

                    <div class="col-12 mb-3">
                        <label for="exampleFormControlInput1" class="form-label m-2">Senha</label>
                        <input type="password" class="form-control" id="passSign" name="passSign" placeholder="Digite sua senha...">
                    </div>

                    <div class="col-12 mb-4">
                        <label for="exampleFormControlInput1" class="form-label m-2">Confirmar senha</label>
                        <input type="password" class="form-control" id="passSignCheck" name="passSignCheck" placeholder="Digite sua senha...">
                    </div>

                    <div class="col-11 col-sm-10 col-md-9 mb-2">
                        <input type="submit" class="btn btn-success form-control" id="submitSign" name="submitSign" value="Prosseguir">
                    </div>
                </form>
            </div>
            
            <div class="modal-footer center">
                <p id="text-Recover-Password" style="display: none;">Esqueceu sua senha?</p> <a href="" id="btn-Recover-Password" style="display: none;">Recupere aqui</a>
                <p id="text-already-have-an-acc" style="display: none;">J?? possui uma conta?</p>
                <button type="button" class="btn btn-primary" id="btn-already-have-an-acc" style="display: none;">Conecte-se</button>
            </div>
        </div>
    </div>
</div>