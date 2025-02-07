package org.gudo.service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public enum LottoService {

	INSTANCE;
	
	public List<Integer> select() {
		
		List<Integer> balls = 
				IntStream.rangeClosed(1, 45).boxed().collect(Collectors.toList());
		
		Collections.shuffle(balls);
		
		return balls.subList(0, 6);
		
	}
	
}
