<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@include file="../includes/header.jsp" %>

	<h1>Board Add Page</h1>
	
	
	
	
	
	
	
	
	<!-- 모달 버튼 -->
<button id="openModalBtn" class="btn btn-primary">모달 열기</button>



<!-- 모달 -->
<div class="modal fade" id="myModal"  aria-labelledby="modalTitle" >

    <div class="modal-dialog">

        <div class="modal-content" inert>
            <div class="modal-header">
                <h5 class="modal-title" id="modalTitle">JavaScript 모달</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                모달 내용입니다.
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                <button type="button" id="confirmBtn" class="btn btn-primary">확인</button>
            </div>
        </div>
    </div>
</div>
	


	<script>
	 // 모달 객체 생성
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
	 
    // 모달 열기 버튼 클릭 이벤트
    document.getElementById('openModalBtn').addEventListener('click', function () {
    	
    	myModal.show();
    });

    // 확인 버튼 클릭 이벤트
    document.getElementById('confirmBtn').addEventListener('click', function () {
        myModal.hide();

    }); 
	</script>
	
<%@include file="../includes/footer.jsp" %>
