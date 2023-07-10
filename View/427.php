<!-- ======= 2-Factor Authentication ======= -->
<h3 class="mb-3">2-Factor Authentication</h3>
<form method="post" class="w-100">
	<div class="form-floating my-3">
		<input type="text" name="2fa" class="form-control form-control-lg" placeholder="2-Factor Authentication Code" id="2fa">
		<label for="2fa">2-Factor Authentication Code</label>
	</div>
	<input type="hidden" class="d-none" name="csrf" value="">
	<?php if(isset($_POST['remember'])){ ?>
		<input type="hidden" name="username" class="d-none" value="<?= $_POST['username'] ?>">
	<?php } ?>
	<?php if(isset($_POST['remember'])){ ?>
		<input type="hidden" name="password" class="d-none" value="<?= $_POST['password'] ?>">
	<?php } ?>
	<?php if(isset($_POST['remember'])){ ?>
		<input type="hidden" name="remember" class="d-none" value="<?= $_POST['remember'] ?>">
	<?php } ?>
	<button type="submit" name="login" class="btn btn-primary w-100">Validate</button>
</form>
<!-- ======= End 2-Factor Authentication ======= -->