<!-- ======= Email Validation ======= -->
<h3 class="mb-3">Email Validation</h3>
<form method="post" class="w-100">
    <div class="form-floating my-3">
        <input type="text" name="verifiedCode" class="form-control form-control-lg" placeholder="Verification Code" id="2fa">
        <label for="verifiedCode">Verification Code</label>
    </div>
    <input type="hidden" class="d-none" name="csrf" value="<?= $this->CSRF->token() ?>">
    <button type="submit" name="login" class="btn btn-primary w-100">Verify</button>
</form>
<!-- ======= End Email Validation ======= -->