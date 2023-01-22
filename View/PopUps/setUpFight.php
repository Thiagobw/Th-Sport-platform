<!-- Modal -->
<div class="modal fade" id="setUPFight" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">

            <div class="modal-header center">
                <h5 class="modal-title" id="modal-title-setUp-fight">Configurar luta</h5>
            </div>
            
            <div class="modal-body container">
                <form class="input-group center" id="setupFightForm">

                    <div class="col-12 col-sm-10 col-md-7 col-lg-7 mb-3">
                        <label for="email" class="form-label m-2">Atleta</label>
                        <input class="form-control" id="athletName1" name="athletName1" type="text" placeholder="Digite o nome do atleta..." maxlength="47">
                    </div>
                    
                    <div class="col-12 col-sm-10 col-md-7 col-lg-7 mb-4">
                        <label for="email" class="form-label m-2">Cor do quimono(opcional)</label>
                        <select class="form-select">
                            <option value="0" selected>selecione</option>
                            <option value="white">Branco</option>
                            <option value="black">Preto</option>
                            <option value="blue">Azul</option>
                        </select>
                    </div>

                    <hr class="col-12 col-sm-10 col-md-7 col-lg-7 border-3 mb-3">

                    <div class="col-12 col-sm-10 col-md-7 col-lg-7 mb-3">
                        <label for="email" class="form-label m-2">Atleta</label>
                        <input class="form-control" id="athletName2" name="athletName2" type="text" placeholder="Digite o nome do atleta..." maxlength="47">
                    </div>

                    <div class="col-12 col-sm-10 col-md-7 col-lg-7 mb-4">
                        <label for="email" class="form-label m-2">Cor do quimono(opcional)</label>
                        <select class="form-select" oninput="colorQuimono(2, this.value);">
                            <option value="0" selected>selecione</option>
                            <option value="white">Branco</option>
                            <option value="black">Preto</option>
                            <option value="blue">Azul</option>
                        </select>
                    </div>

                    <div class="col-12 col-sm-10 col-md-7 col-lg-7 mb-4">
                        <label for="customRange2" class="form-label">Tempo de luta: <span id="timeSelected">1</span></label>
                        <input type="range" class="form-range" min="1" max="10"  step="1" id="timeFight" value="1" oninput="showSelectedTime();">
                    </div>

                    <div class="col-12 mb-3 center">
                        <input type="submit" class="btn btn-lg btn-primary" value="Prosseguir">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>