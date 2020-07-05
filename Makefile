.PHONY: serve serve-debug compile compile-debug

default:
	@make serve

serve-debug:
	@./bin/serve-debug

serve:
	@./bin/serve

compile:
	@./bin/compile

compile-debug:
	@./bin/compile-debug
