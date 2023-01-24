<!-- Modal -->
<div class="modal fade" id="setUPFight" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content bg-dark text-white">

            <div class="modal-header center">
                <h5 class="modal-title" id="modal-title-setUp-fight">Configurar luta</h5>
            </div>
            
            <div class="modal-body container center">
                <form class=" col-12 col-sm-11 col-md-9 col-lg-7 col-xl-6 col-xxl-5 shadow rounded-3" id="setupFightForm">
                    <div class="input-group center">

                        <div class="col-11 col-md-8 col-lg-9 mb-3">
                            <label for="email" class="form-label m-2">Atleta</label>
                            <input class="form-control" id="athletName1" name="athletName1" type="text" placeholder="Digite o nome do atleta..." maxlength="47" onblur="checkField(1, 'athletName1');" onfocus="checkField(2, 'athletName1');" onkeydown="checkCaracter(event);" required>
                        </div>

                        <div class="col-11 col-md-8 col-lg-9 mb-4">
                            <label for="email" class="form-label m-2">Cor do quimono(opcional)</label>
                            <select class="form-select" id="kimonoColor1">
                                <option value="0" selected>selecione</option>
                                <option value="white">Branco</option>
                                <option value="black">Preto</option>
                                <option value="blue">Azul</option>
                            </select>
                        </div>

                        <hr class="col-11 col-md-8 col-lg-9 border-3 mb-3">

                        <div class="col-11 col-md-8 col-lg-9 mb-3">
                            <label for="email" class="form-label m-2">Atleta</label>
                            <input class="form-control" id="athletName2" name="athletName2" type="text" placeholder="Digite o nome do atleta..." maxlength="47" onblur="checkField(1, 'athletName2');" onfocus="checkField(2, 'athletName2');" onkeydown="checkCaracter(event);" required>
                        </div>

                        <div class="col-11 col-md-8 col-lg-9 mb-4">
                            <label for="email" class="form-label m-2">Cor do quimono(opcional)</label>
                            <select class="form-select" id="kimonoColor2">
                                <option value="0" selected>selecione</option>
                                <option value="white">Branco</option>
                                <option value="black">Preto</option>
                                <option value="blue">Azul</option>
                            </select>
                        </div>
                        
                        <hr class="col-11 col-md-8 col-lg-9 border-3 mb-3">

                        <div class="col-11 col-md-8 col-lg-9 mb-4">
                            <label for="customRange2" class="form-label">Tempo de luta: <span id="timeSelected">1</span></label>
                            <input type="range" class="form-range" min="1" max="10"  step="1" id="timeFight" value="1" oninput="showSelectedTime();">
                        </div>
                        
                        <div class="col-10 col-md-8 col-lg-9 mb-3 p-1 p-md-2 center">
                            <input type="submit" class="form-control btn btn-lg btn-primary" value="Prosseguir">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>