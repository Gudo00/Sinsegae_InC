<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>파일 업로드 폼</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
	rel="stylesheet">
</head>
<body>
	<div class="container mt-5">
		<h2 class="text-center">파일 업로드</h2>
		<form action="/upload" method="POST" enctype="multipart/form-data"
			class="p-4 border rounded bg-light">
			<div class="mb-3">
				<label for="pname" class="form-label">이름</label> <input type="text"
					class="form-control" id="pname" name="pname" required>
			</div>
			<div class="mb-3">
				<label for="files" class="form-label">파일 업로드</label> <input
					type="file" class="form-control" id="files" name="files" multiple
					required>
			</div>
			<button type="submit" class="btn btn-primary w-100">업로드</button>
		</form>
	</div>

	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
